import dynamic from 'next/dynamic';

const NoSSR = ({children}) => (<>{children}</>);

const Dynamic = dynamic(() => Promise.resolve(NoSSR), {ssr: false});

export default Dynamic;
