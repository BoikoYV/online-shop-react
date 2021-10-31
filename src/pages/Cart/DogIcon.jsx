import { useState, useEffect, } from 'react';
import { getPromocodesList } from '../../api/getPromocodesList'

const DogIcon = () => {
    const [promocodes, setPromocodes] = useState(null);
    const [setError] = useState(false);
    const [promoForCopy, setPromoForCopy] = useState(null);

    useEffect(() => {
        let mounted = true;
        getPromocodesList()
            .then(data => {
                if (mounted) {
                    setPromocodes(data);
                }
            })
            .catch(() => {
                setError(true)
            })
        return () => mounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clickHandler = () => {
        const firstPromocode = promocodes.find(({ promocodeType }) => {
            return promocodeType === 'guest';
        })

        setPromoForCopy(firstPromocode.code)
    }


    return (
        <>
            <div className='bubbleChat'>
                <button className='bubbleBtn' >Click to get promocode</button>
            </div>
            <div className="dogContainer" onClick={clickHandler}>
                <div className="dog">
                    <div className="heart heart--1"></div>
                    <div className="heart heart--2"></div>
                    <div className="heart heart--3"></div>
                    <div className="heart heart--4"></div>
                    <div className="head">
                        <div className="year year--left"></div>
                        <div className="year year--right"></div>
                        <div className="nose"></div>
                        <div className="face">
                            <div className="eye eye--left"></div>
                            <div className="eye eye--right"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="cheast"></div>
                        <div className="back"></div>
                        <div className="legs">
                            <div className="legs__front legs__front--left"></div>
                            <div className="legs__front legs__front--right"></div>
                            <div className="legs__back legs__back--left"></div>
                            <div className="legs__back legs__back--right"></div>
                        </div>
                        <div className="tail"></div>
                    </div>
                </div>

                <p className={promoForCopy ? 'dogPromocode dogPromocodeShow' : 'dogPromocode'}>{promoForCopy ? promoForCopy : ''}</p>
            </div>
        </>
    );
};

export default DogIcon;