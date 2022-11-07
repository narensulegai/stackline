import React from 'react';
import PropTypes from "prop-types";


const LeftPanel = ({title, image, subtitle, tags}) => {
    return (
        <>
            <img src={image} alt="Logo"/>
            <h3>{title}</h3>
            <p className="subtitle">{subtitle}</p>
            <ul className="tag-container">
                {tags.map((tag, i) => {
                    return <li className="tag" key={i}>{tag}</li>
                })}
            </ul>
        </>
    );
};
LeftPanel.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    subtitle: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
}
export default LeftPanel;
