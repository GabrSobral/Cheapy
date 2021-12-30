import Image from 'next/image'

interface Props {
  size: number;
  stars: number;
}

export const FeedbackStars = ({ size,stars }: Props) => {
  return(
    <div>
      <Image src={`/Star${stars >= 1 ? "Filled" : ""}.svg`} alt="Star of feedback" width={size} height={size}/>
      <Image src={`/Star${stars >= 2 ? "Filled" : ""}.svg`} alt="Star of feedback" width={size} height={size}/>
      <Image src={`/Star${stars >= 3 ? "Filled" : ""}.svg`} alt="Star of feedback" width={size} height={size}/>
      <Image src={`/Star${stars >= 4 ? "Filled" : ""}.svg`} alt="Star of feedback" width={size} height={size}/>
      <Image src={`/Star${stars >= 5 ? "Filled" : ""}.svg`} alt="Star of feedback" width={size} height={size}/>
    </div>
  )
}