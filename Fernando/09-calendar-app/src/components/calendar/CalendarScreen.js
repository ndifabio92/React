import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer( moment ); // or globalizeLocalizer

const events = [{
    title: 'Cumple del jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hours').toDate(),
    bgcolor: '#fafafa',
    user: {
        _id: '1234',
        name: 'Fernando'
    }
}];

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const [ lasview, setLasview ] = useState(
        localStorage.getItem('lastView') || 'month'
    )

    const onDoubleClick = e => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = e => {
        
    }

    const onViewChange = e => {
        setLasview(e);
        localStorage.setItem('lastView', e );
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className = "calendar-screen">
            <Navbar/>

            <Calendar
                localizer = { localizer }
                events = { events }
                startAccessor = "start"
                endAccessor = "end"
                messages = { messages }
                eventPropGetter = { eventStyleGetter }
                components = {{ event: CalendarEvent }}
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent = { onSelectEvent }
                onView = { onViewChange }
                view = { lasview }
            />

            <CalendarModal />
        </div>
    )
}
