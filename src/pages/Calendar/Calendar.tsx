import { Outlet, useParams, useOutletContext } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'
import { useTranslation } from 'react-i18next';
//components
import { Layout } from '../../components/Layout/Layout/Layout'
import { CalendarNavbar } from './CalendarNavbar'


export const useCalendarOutletContext = () => {
    return useOutletContext<{ date: Dayjs }>()
}

export const Calendar = () => {
    const { date: dateParams } = useParams()
    const date = dayjs(dateParams, 'DD-MM-YYYY').isValid() ? dayjs(dateParams, 'DD-MM-YYYY') : dayjs()

    const { t } = useTranslation();

    return (
        <Layout title={t('calendar.title')}>
            <CalendarNavbar date={date} />
            <Outlet context={{ date }} />
        </Layout>
    );
}