interface Props {
  color: string;
  size: number
}

export const Check = ({ color, size }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.6665 8L8.6665 15L20.3332 1" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}