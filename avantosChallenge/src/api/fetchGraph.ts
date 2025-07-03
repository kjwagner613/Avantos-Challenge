// src/api/fetchGraph.ts

import type { FormNode } from '../types/formTypes'


function extractFieldsFromSchema(schema: any): FormNode['fields'] {
  if (!schema?.properties) return []

  return Object.entries(schema.properties).map(([id, def]: [string, any]) => ({
    id,
    label: def.title || id,
    type: def.avantos_type || def.type || 'string',
    required: schema.required?.includes(id) || false
  }))
}



type RawNode = {
  id: string
  type: string
  position: { x: number; y: number }
  data: any
}


function extractFormsFromGraph(
  nodes: RawNode[],
  formDefs: Array<{ id: string; field_schema: any }>
): FormNode[] {
  return nodes
    .filter(node => node.type === 'form')
    .map(node => {
      const def = formDefs.find(f => f.id === node.data.component_id)
      return {
        id: node.id,
        name: node.data.name,
        dependsOn: node.data.prerequisites ?? [],
        fields: extractFieldsFromSchema(def?.field_schema)
      }
    })
}



export async function fetchFormGraph(): Promise<FormNode[]> {
  // Fetch the blueprint graph from the mock API (proxied via Vite server)
  const res = await fetch(
    '/api/v1/123/actions/blueprints/bp_456/bpv_123/graph',
    {
      headers: {
        // As per API docs, request JSON responses with potential problem details
        Accept: 'application/json, application/problem+json',
      },
    }
  )
  const graph = await res.json()
  const forms = extractFormsFromGraph(graph.nodes ?? [], graph.forms ?? [])
  console.log(
    '[Field labels]',
    forms.flatMap(f => f.fields.map(field => field.label))
  )
  return forms
}
