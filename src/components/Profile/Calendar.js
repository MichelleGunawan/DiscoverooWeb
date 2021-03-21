import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
    // ✅ a change in default state: []
    const [selectedDays, setSelectedDays] = useState([]);
    return (
      <Calendar
        style="calendar"
        value={selectedDays}
        onChange={setSelectedDays}
        shouldHighlightWeekends
        colorPrimary="#FFC861"
        colorPrimaryLight="#fddda0"
      />
    );
};

export default App;