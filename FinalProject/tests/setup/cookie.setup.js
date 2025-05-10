import {test as setup } from '@playwright/test'
import path from 'path';
import {Header} from '../page-object/conponents/header'

const authFile = path.join(__dirname, '../../playwright/.auth/user.json')

setup('close Cookies', async({page})=>{
    const header= new Header(page)
    await header.navigate('https://www.lamoda.by/')
    await header.acceptCookie()
    await page.waitForLoadState('load');
    await page.context().storageState({path: authFile});
})  