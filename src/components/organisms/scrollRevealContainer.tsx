import { FC, useRef, useEffect } from 'react'
import scrollReveal from 'scrollreveal'

type ScrollRevealContainerProps = {
  move?: string
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move,
}) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
        opacity: 0,
        origin:
          move === 'left'
            ? 'left'
            : move === 'right'
            ? 'right'
            : move === 'top'
            ? 'top'
            : 'bottom',
        distance: '40px',
      })
  }, [sectionRef])

  return <section ref={sectionRef}>{children}</section>
}

export default ScrollRevealContainer
