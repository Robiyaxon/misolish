import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import style from "./Menu.module.css"
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import About1 from '../about/About_1';
import About2 from './About2';
export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const { t } = useTranslation()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={style.Menu}>

            <Box className={style.Block}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={t("about2")} value="2" />
                            <Tab label={t("about1")} value="1" />
                        </TabList>
                    </Box>
                    <TabPanel value="2"><About2 /></TabPanel>
                    <TabPanel value="1"><About1 /></TabPanel>
                </TabContext>
            </Box>
        </div>

    );
}


