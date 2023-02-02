import { adminService } from "./adminService";
const config = require('../../../config');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storage } from "../../global/config/storage";


async function deleteUser(
  id: string,
) {
    try {
        const userSuperAdmin = await storage.getString('@eupescador/userSuperAdmin');

        if(userSuperAdmin === "true") {
          const token : string = config.ADMIN_CONFIRMATION_CODE;
          const superAdminToken = `Bearer ${token}`;
          const res = await adminService.delete(`/admin/${id}`, { headers: { Authorization: superAdminToken } });
          return res.status;
        } else {
            console.log("Deu errado");
        }
        
    } catch (error) {
        
    }
}

export { deleteUser };