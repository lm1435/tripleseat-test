import React from 'react'

const Event = ({
  event : {
    id,
    name,
    status,
    event_start,
    event_end,
    rooms,
    quest_count,
    guaranteed_guest_count,
    grand_total,
    actual_amount,
    account,
    contact
  }

}) => {
  return (
    <div>
      <p>
        {name}
      </p>
      <p>
        Start: {event_start} - End: {event_end}
      </p>
    </div>
  )
}

export default Event;
