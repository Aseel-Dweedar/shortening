import React, {useState} from 'react';
import './SearchSection.scss'
import CyanBtn from "../../sections/CyanBtn/CyanBtn";
import {useSelector, useDispatch} from "react-redux";
import {onLinkAdded, setError} from "../../../store/shortenLinks/shortenLinksActions";
import LinkItem from "./LinkItem/LinkItem";

function SearchSection() {

    const dispatch = useDispatch()
    const {links, error} = useSelector(state => state.links)
    const screenWidth = useSelector(state => state.home.screenWidth)

    const [inputValue, setInputValue] = useState("");
    const [copiedTextIdx, setCopiedTextIdx] = useState(null);

    const onInputChange = (value) => {
        dispatch(setError(''))
        setInputValue(value)
    }

    const onValueSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) dispatch(setError('Please add a link'))
        else {
            dispatch(onLinkAdded(inputValue))
            setInputValue('')
        }
    }

    const onCopyClicked = (text, idx) => {
        setCopiedTextIdx(idx)
        navigator.clipboard.writeText(text)
        setTimeout(() => {
            setCopiedTextIdx(null)
        }, 3000)
    }

    return (
        <div className={'searchSection'}>
            <form className={'itemsContainer'} onSubmit={(e) => onValueSubmit(e)}>
                <div className={'emailAndError'}>
                    <input
                        onChange={(e) => onInputChange(e.target.value)}
                        className={`email ${error ? 'inputError' : ""}`}
                        type='text'
                        placeholder='Shorten a link here'
                        value={inputValue}
                    />
                    {error && <span className={'error'}>{error}</span>}
                </div>
                <CyanBtn
                    type='submit'
                    extraStyle={{
                        width: screenWidth > 375 ? '20%' : '100%',
                        height: '100%',
                        borderRadius: '6px'
                    }}
                >Shorten It!</CyanBtn>
            </form>
            {
                links?.length ?
                    <div className={'linkItem'}>
                        {
                            links.map((link, i) => <LinkItem
                                onCopyClicked={onCopyClicked}
                                link={link}
                                key={i+link.original}
                                idx={i}
                                copiedText={copiedTextIdx === i}
                            />)
                        }
                    </div> : null
            }
        </div>
    )
}

export default SearchSection;