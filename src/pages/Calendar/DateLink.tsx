import { Dayjs } from "dayjs";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

interface DateLinkProps {
    move: 'forward' | 'back'
    by: 'day' | 'week' | 'month'
    date: Dayjs
    children?: ReactNode
}

const DateLink = ({ move, by, date, children }: DateLinkProps) => {
    return (
        <Link
            to={move === 'back' ? `../${date.subtract(1, by).format('DD-MM-YYYY')}` : `../${date.add(1, by).format('DD-MM-YYYY')}`}
            replace={true}
        >
            {move === "back" && <img src={arrowLeft} alt={`move back to previous ${by}`} />}
            {children}
            {move === 'forward' && <img src={arrowRight} alt={`move forward to next ${by}`} />}
        </Link>
    );
}

export default DateLink;