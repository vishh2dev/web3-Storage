

import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
// import { ROUTES_DATA } from "./routesData";
export const Approutes = ()=>{
    const address = false
    if(address){
        return(
            <DashboardLayout>

            </DashboardLayout>
        )
    }
    return(
        <DefaultLayout>

        </DefaultLayout>
    )
}