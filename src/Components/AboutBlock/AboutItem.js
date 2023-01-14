const AboutItem = (items) => {
    return(
        <>
            <div className="item">
                <div className="layout">
                    <img src="https://img2.freepng.ru/20180407/zsw/kisspng-check-mark-symbol-clip-art-svg-5ac909b138a2a7.731845301523124657232.jpg" alt=""/>
                    <h3>{items.name}</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloribus expedita explicabo harum in, laudantium nemo neque quae vitae. Aliquam consequatur cum distinctio, ex iste magni mollitia quos ullam voluptas.
                </p>
            </div>
        </>
    )
}
export default AboutItem