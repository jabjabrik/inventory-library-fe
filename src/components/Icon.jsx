import dynamic from 'next/dynamic'
// import { Suspense } from 'react'


const Icon = ({ name, className, size, color = 'currentColor' }) => {
    const Svg = dynamic(() => import(`../assets/icons/${name}.svg`))
    return (
        // <Suspense fallback={`Loading...`}>
        <Svg className={className} height={size} width={size} fill={color} />
        // {/* </Suspense> */}
    )
}

export default Icon