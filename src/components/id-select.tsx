import React from 'react'
import {Select} from 'antd'

type SelectProps = React.ComponentProps<typeof Select>;
interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value?:  null | undefined|number;
  onChange?: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}


export const IdSelect=(props:IdSelectProps)=>{
      const {value,onChange,defaultOptionName,options,...restProps}=props
   
      return <Select value={toNumber(value)} onChange={value=>onChange?.(toNumber(value)||undefined)} 
          {...restProps}
      >
                       {
                           defaultOptionName?<Select.Option value={0}>{defaultOptionName}</Select.Option>:undefined
                       }
                       {options?.map((option) => (
                    <Select.Option key={option.id} value={option.id}>
                                     {option.name}
                                                 </Select.Option>
      ))}



                    </Select>
                                  
}

const toNumber=(value:unknown)=>isNaN(Number(value))?0:Number(value)