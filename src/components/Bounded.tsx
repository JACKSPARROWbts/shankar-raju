import React from "react"

// Import library to take any no of inputs and give as single string
import clsx from "clsx"


type BoundedProps={
    as?: React.ElementType;
    className?:string;
    children:React.ReactNode
}

const Bounded=React.forwardRef<HTMLDivElement,BoundedProps>(
    ({as:Comp="section",className,children,...restProps},ref)=>{
        return(
            <Comp ref={ref} className={clsx("px-1 py-5 md:px-6 md:py-5 lg:py-5",className)}
            {...restProps}>
                <div className="mx-auto w-full max-w-7x1">
                    {children}
                </div>
            </Comp>
        )
    }
)
Bounded.displayName="Bounded"

export default Bounded