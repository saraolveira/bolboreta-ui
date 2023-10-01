const InfiniteSlider = () => {
    return (
        <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center [&_li]:mx-4 [&_img]:max-w-none [&_img]:w-40  animate-infinite-slide">
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
            </ul>
            <ul
                className="flex items-center [&_li]:mx-4 [&_img]:max-w-none [&_img]:w-40 animate-infinite-slide"
                aria-hidden="true"
            >
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
                <li>
                    <img src="bolboreta.png" alt="bolboreta" />
                </li>
                <li>
                    <img src="game.png" alt="game" />
                </li>
                <li>
                    <img src="heart.png" alt="heart" />
                </li>
            </ul>
        </div>
    )
}

export default InfiniteSlider
