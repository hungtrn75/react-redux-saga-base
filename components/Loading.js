import ReactLoading from 'react-loading';

export default ({ type = 'spin', color = 'blue'}) => (
	<div className='page-loading'>
    	<ReactLoading className='icon' type={type} color={color} height={50} width={50} />
    </div>
)
