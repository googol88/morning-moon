import React from 'react';
import { Link } from 'gatsby';

import lessonNuggetStyles from './lessonNugget.module.css';

export default (props) => {
    return (
        <div>
            <h5>{ props.date } - <span>{ props.subject }</span>: <span>{ props.unit }</span></h5>
            <Link to={ props.slug }><h2>{ props.title }</h2></Link>
            <p className={lessonNuggetStyles.excerpt}>
                { props.excerpt }
            </p>
            <h5><Link to={ props.slug } className={ lessonNuggetStyles.read }>Read</Link></h5>
            <p>
                <h5 className={lessonNuggetStyles.hw_label}>HOMEWORK:&nbsp;</h5>
                { props.homework } 
            </p>
            <hr className={lessonNuggetStyles.hr} />
        </div>
    );
}
