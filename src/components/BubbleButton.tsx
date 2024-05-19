import { ComponentProps, ReactNode } from "react"

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}
export const BubbleButton: React.FC<BubbleButtonProps> = (props: BubbleButtonProps) => {
  return (
    <button className='hover:text-zinc-50 hover:bg-zinc-600 p-2 text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-violet-400' {...props}/>
  )
}