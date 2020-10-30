import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer( moment ); // or globalizeLocalizer

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    // TODO: Leer eventos
    const { events, activeEvent } = useSelector( state => state.calendar );

    const [ lasview, setLasview ] = useState(
        localStorage.getItem('lastView') || 'month'
    )

    const onDoubleClick = e => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = e => {
        dispatch( eventSetActive(e) );
    }

    const onViewChange = e => {
        setLasview(e);
        localStorage.setItem('lastView', e );
    }

    const onSelectSlot = e => {
        dispatch( eventClearActiveEvent() );
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
                onSelectSlot = { onSelectSlot }
                selectable = { true }
                onView = { onViewChange }
                view = { lasview }
            />

            <AddNewFab />

            {
                ( activeEvent ) && <DeleteEventFab /> 
            }

            <CalendarModal />
        </div>
    )
}
