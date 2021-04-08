import React, {FC} from 'react';

import style from './footer.module.scss';

const Footer: FC = () => {

    return <div className={style.footer}>

        <span>
            &#169; Dmitry 2021 | All Right Reserved
        </span>
    </div>
}
export default Footer