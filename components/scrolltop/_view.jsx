import { MdExpandLess } from 'react-icons/md'
import { IconButton } from '@chakra-ui/react'

const ScrollTopView = (props) => {
	const { onScroll, onVisbile, visible } = props

	console.log(visible)
	if (typeof window === 'object') window.addEventListener('scroll', onVisbile)

	return (
		<>
			<div
				style={{
					position: 'fixed',
					bottom: 50,
					right: 30
				}}>
				<button
					className='btn btn-primary btn-small'
					onClick={onScroll}
					style={{ display: visible ? 'inline-block' : 'none', borderRadius: 5 }}>
					<IconButton
            icon={<MdExpandLess w={4} h={4} />}
            aria-label={'Scroll to Top'}
            mb='10vh'
            size='md'
          />
				</button>
			</div>
		</>
	)
}

export default ScrollTopView