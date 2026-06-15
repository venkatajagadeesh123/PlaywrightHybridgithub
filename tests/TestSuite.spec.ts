//-- Test Suite for 69Batch_Hybrid
import {test} from '@playwright/test';
import { general } from '../lib/General';

test.describe('Test Suite for 69Batch_Hybrid', () => {
    test('TC001_Login_Logout',async({page})=>{
    //--Test Steps
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.logout();
});
test('TC002_AddEmployee',async({page})=>{
    //--Test Steps
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.waitTime();
    await gen.addNewEmployee();
    await gen.logout();
});
});