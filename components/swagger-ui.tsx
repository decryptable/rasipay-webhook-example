"use client"

import { useEffect, useState } from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

interface SwaggerUIProps {
  spec: Record<string, any>
}

export default function SwaggerUIComponent({ spec }: SwaggerUIProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="swagger-ui-container">
      <SwaggerUI spec={spec} />
      <style jsx global>{`
        .swagger-ui .topbar {
          display: none;
        }
        .swagger-ui {
          margin-top: 1rem;
        }
        .swagger-ui .info {
          margin: 20px 0;
        }
        .swagger-ui .scheme-container {
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
        .swagger-ui .opblock {
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }
        .swagger-ui .opblock-tag {
          font-size: 1.2rem;
          margin: 1.5rem 0 0.5rem;
        }
        .swagger-ui .opblock-tag:hover {
          background: transparent;
        }
        .swagger-ui .opblock .opblock-summary-method {
          border-radius: 4px;
          font-weight: bold;
        }
        .swagger-ui .btn {
          border-radius: 4px;
        }
        .swagger-ui .btn.execute {
          background-color: #4f46e5;
        }
        .swagger-ui .btn.execute:hover {
          background-color: #4338ca;
        }
        .swagger-ui .response-col_status {
          font-weight: bold;
        }
        .swagger-ui table tbody tr td {
          padding: 8px 0;
        }
        .swagger-ui .responses-inner {
          padding: 12px;
        }
        .swagger-ui .opblock-body pre {
          border-radius: 4px;
          background: #f8f9fa;
        }
        .dark .swagger-ui .opblock-body pre {
          background: #1e1e1e;
          color: #f8f9fa;
        }
        .dark .swagger-ui .opblock {
          background: rgba(30, 30, 30, 0.7);
          border-color: #333;
        }
        .dark .swagger-ui .opblock .opblock-summary {
          border-color: #333;
        }
        .dark .swagger-ui .opblock-description-wrapper, 
        .dark .swagger-ui .opblock-external-docs-wrapper, 
        .dark .swagger-ui .opblock-title_normal {
          color: #f8f9fa;
        }
        .dark .swagger-ui .opblock-summary-description {
          color: #ccc;
        }
        .dark .swagger-ui .parameter__name, 
        .dark .swagger-ui .parameter__type, 
        .dark .swagger-ui table thead tr td, 
        .dark .swagger-ui table thead tr th {
          color: #f8f9fa;
        }
        .dark .swagger-ui input, 
        .dark .swagger-ui select {
          background-color: #333;
          color: #f8f9fa;
          border-color: #555;
        }
        .dark .swagger-ui .markdown p, 
        .dark .swagger-ui .markdown li {
          color: #ccc;
        }
        .dark .swagger-ui .scheme-container {
          background: transparent;
        }
        .dark .swagger-ui section.models {
          border-color: #333;
        }
        .dark .swagger-ui section.models h4 {
          color: #f8f9fa;
        }
        .dark .swagger-ui .model-box {
          background: #333;
        }
        .dark .swagger-ui .model {
          color: #ccc;
        }
        .dark .swagger-ui .responses-inner h4, 
        .dark .swagger-ui .responses-inner h5 {
          color: #f8f9fa;
        }
      `}</style>
    </div>
  )
}

