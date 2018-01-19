import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const Hotelstable = ({ hotels }) => (
    <table>
        <tbody>
            <tr>
                <th>ホテル名</th>
            </tr>
            {hotels.map(hotel => (<HotelRow key={hotel.id} hotel= {hotel} />))}
        </tbody>
    </table>
);

Hotelstable.PropTypes = {
    hotels: PropTypes.arrayOf(PropTypes.any)
};

Hotelstable.defaultProps = {
    hotels: [],
};

export default Hotelstable;
