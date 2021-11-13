import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Fonts from '../../../constants/fonts';
import Colors from '../../../constants/colors';

//date picker type
interface DatePickerProps {
  onChange: any;
  value: any;
  error: string;
  errorIndicator?: boolean;
}

export function DatePicker(props: DatePickerProps) {
  const { onChange, value, error, errorIndicator } = props;

  //date/time picker function
  return (
    <DatePickerCover
      style={{
        marginBottom: error?.length ? '0.5rem' : '2.5rem',
        borderColor: errorIndicator ? Colors.violetRed : Colors.lightGrey
      }}
    >
      {value ? (
        <Label style={{ top: '-0.8rem' }}>
          <p>Date</p>
        </Label>
      ) : null}
      <ReactDatePicker
        className="date-picker-calendar"
        onChange={(date: any) => onChange(date)}
        selected={value}
        placeholderText="Date"
        minDate={new Date()}
      />
      {error && <p className="error">{`Date ${error}`}</p>}
    </DatePickerCover>
  );
}

export function TimePicker(props: DatePickerProps) {
  const { onChange, value, error, errorIndicator } = props;
  return (
    <DatePickerCover
      style={{
        marginBottom: error?.length ? '0.5rem' : '2.5rem',
        borderColor: errorIndicator ? Colors.violetRed : Colors.lightGrey
      }}
    >
      {value ? (
        <Label style={{ top: '-0.8rem' }}>
          <p>Time</p>
        </Label>
      ) : null}
      <ReactDatePicker
        className="date-picker-calendar"
        onChange={(date: any) => onChange(date)}
        selected={value}
        placeholderText="Time"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      {error && <p className="error">{`Time ${error}`}</p>}
    </DatePickerCover>
  );
}

const DatePickerCover = styled.div<{ id?: any }>`
  .date-picker-calendar {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${Colors.lightGrey};
    padding: 0.5rem 0;
    font-family: ${Fonts.Hind_Regular};
    font-size: 0.875rem;
    outline: none;
  }
  .error {
    color: ${Colors.violetRed};
    font-size: 0.875rem;
    text-align: left;
    margin-top: 0.3rem;
    margin-bottom: 2rem;
  }
`;

const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -0.8rem;
  p {
    color: ${Colors.mediumGrey};
    margin: 0;
  }
`;
