import Head from 'next/head'

const Seo = ( arrayData ) => {
    let result = null;
    if (arrayData.object.length > 0) {
        result = arrayData.object.map((object, index) => {
            return (
                object.key == 'title'
                    ? <title key={index}>{object.content}</title>
                    : ((object.title == 'name') ? <meta key={index} name={object.key} content={object.content}/>
                    : <meta key={index} property={object.key} content={object.content}/>)
            );
        });
    }
    return (
        <Head>
            { result }
        </Head>
    )
}

export default Seo;
