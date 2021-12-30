import Image from 'next/image'

interface Props {
  size: number
}

export const FeedbackStars = ({ size }: Props) => {
  return(
    <div>
      <Image src="/StarFilled.svg" alt="Star of feedback" width={size} height={size}/>
      <Image src="/StarFilled.svg" alt="Star of feedback" width={size} height={size}/>
      <Image src="/StarFilled.svg" alt="Star of feedback" width={size} height={size}/>
      <Image src="/Star.svg" alt="Star of feedback" width={size} height={size}/>
      <Image src="/Star.svg" alt="Star of feedback" width={size} height={size}/>
    </div>
  )
}