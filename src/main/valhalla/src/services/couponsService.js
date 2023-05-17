import authHeader  from "../services/authHeader";

class CouponsService {
    getCoupons() {
        return fetch("/api/coupon", { headers: authHeader() })
        .then(response => response.json())
        .catch(error => console.error(error));
    }
    saveCoupon(description){
        return fetch("api/coupon/create?description="+ description,{
            method: "POST",
            headers: 
              authHeader()
            ,
          });
    }

}

export default new CouponsService();