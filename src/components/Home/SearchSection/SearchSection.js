import React, {useState} from 'react';
import './SearchSection.scss'
import CyanBtn from "../../sections/CyanBtn/CyanBtn";
import {useSelector, useDispatch} from "react-redux";
import {onLinkAdded, setError} from "../../../store/shortenLinks/shortenLinksActions";

function SearchSection() {

    const dispatch = useDispatch()
    const {links, error} = useSelector(state => state.links)
    const screenWidth = useSelector(state => state.home.screenWidth)

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (value) => {
        dispatch(setError(''))
        setInputValue(value)
    }

    const onValueSubmit = () => {
        if (!inputValue) dispatch(setError('Please add a link'))
        else dispatch(onLinkAdded(inputValue))
    }

    return (
        <div className={'searchSection'}>
            <div className={'emailContainer'}>
                <input
                    onChange={(e) => onInputChange(e.target.value)}
                    className={'email'}
                    type='text'
                    placeholder='Shorten a link here'
                    value={inputValue}
                />
                {error && <p>{error}</p>}
                <CyanBtn
                    onClick={onValueSubmit}
                    extraStyle={{
                        width: screenWidth > 375 ? '20%' : '100%',
                        height: '100%',
                        borderRadius: '6px'
                    }}
                >Shorten It!</CyanBtn>
            </div>
            {
                links?.length ?
                    <div>
                        {
                            links.map(link =>
                                <div>
                                    <p>{link.original}</p>
                                    <h3>{link.shorten}</h3>
                                </div>
                            )
                        }
                    </div> : null
            }
        </div>
    )
}

export default SearchSection;