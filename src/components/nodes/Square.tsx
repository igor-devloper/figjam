import { NodeResizer } from "@reactflow/node-resizer"
import { NodeProps, Handle, Position } from "reactflow"
import '@reactflow/node-resizer/dist/style.css';

export function Square({selected}: NodeProps) {
  return (
    <div className="bg-violet-500 w-full h-full rounded min-w-[200px] min-h-[200px]">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <Handle 
        id="right" 
        type="source" 
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-blue-400/80"
      />

      <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <Handle 
        id="top" 
        type="source" 
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-blue-400/80"
      />

      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-blue-400/80"
      />
      <input type="text" className="w-full h-full bg-transparent text-2xl text-white font-bold font-sans text-center border-non"/>
    </div>
  )
}