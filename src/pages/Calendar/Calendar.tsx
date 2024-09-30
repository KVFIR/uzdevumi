import { Outlet, useParams, useOutletContext } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'
//components
import { Layout } from '../../components/layout/Layout/Layout'
import { CalendarNavbar } from './CalendarNavbar'


export const useCalendarOutletContext = () => {
    return useOutletContext<{ date: Dayjs }>()
}

export const Calendar = () => {
    const { date: dateParams } = useParams()
    const date = dayjs(dateParams, 'DD-MM-YYYY').isValid() ? dayjs(dateParams, 'DD-MM-YYYY') : dayjs()

    return (
        <Layout title='Calendar'>
            <CalendarNavbar date={date} />
            <Outlet context={{ date }} />
        </Layout>
    );
}