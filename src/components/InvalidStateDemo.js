import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { CountryService } from '../service/CountryService';

export const InvalidStateDemo = () => {

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState([]);
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState([]);
    const [value8, setValue8] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getCountries().then(countries => setCountries(countries))
    }, []);

    const searchCountry = (event) => {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        setFilteredCountries(filtered);
    };

    return (
        <div className="p-grid p-nogutter">
            <div className="card" style={{ width: '100%' }}>
                <h5>Invalid State</h5>
                <p>All form components have an invalid state style to display the validation errors when p-invalid is applied by React.</p>
                <div className="p-fluid p-grid">
                    <div className="p-col-12 p-md-6">
                        <div className="p-field">
                            <label htmlFor="inputtext">InputText</label>
                            <InputText className="p-invalid" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
                        </div>
                        <div className="p-field">
                            <label htmlFor="autocomplete">AutoComplete</label>
                            <AutoComplete className="p-invalid" id="autocomplete" field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={searchCountry} onChange={(e) => setSelectedCountry(e.value)}></AutoComplete>
                        </div>
                        <div className="p-field">
                            <label htmlFor="calendar">Calendar</label>
                            <Calendar id="calendar" className="p-invalid" showIcon value={value2} onChange={(e) => setValue2(e.value)}></Calendar>
                        </div>
                        <div className="p-field">
                            <label htmlFor="chips">Chips</label>
                            <Chips id="chips" className="p-invalid" value={value3} onChange={(e) => setValue3(e.value)}></Chips>
                        </div>
                        <div className="p-field">
                            <label htmlFor="textarea">Textarea</label>
                            <InputTextarea id="textarea" className="p-invalid" rows={3} cols={30} value={value4} onChange={(e) => setValue4(e.target.value)}></InputTextarea>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-6">
                        <div className="p-field">
                            <label htmlFor="inputmask">InputMask</label>
                            <InputMask id="inputmask" className="p-invalid" mask="99/99/9999" value={value5} onChange={(e) => setValue5(e.value)}></InputMask>
                        </div>
                        <div className="p-field">
                            <label htmlFor="inputnumber">InputNumber</label>
                            <InputNumber id="inputnumber" className="p-invalid" value={value6} onValueChange={(e) => setValue6(e.target.value)}></InputNumber>
                        </div>
                        <div className="p-field">
                            <label htmlFor="dropdown">Dropdown</label>
                            <Dropdown id="dropdown" className="p-invalid" autoDisplayFirst={false} options={cities} value={value7} onChange={(e) => setValue7(e.value)} optionLabel="name" ></Dropdown>
                        </div>
                        <div className="p-field">
                            <label htmlFor="multiselect">MultiSelect</label>
                            <MultiSelect id="multiselect" className="p-invalid" options={cities} value={value8} onChange={(e) => setValue8(e.value)} optionLabel="name" filter={false} ></MultiSelect>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
