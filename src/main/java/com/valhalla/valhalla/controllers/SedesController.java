package com.valhalla.valhalla.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Sedes;

@RestController
@RequestMapping("/sedes")
public class SedesController {

    ArrayList<Sedes> listSedes = new ArrayList<Sedes>();

    public SedesController() {
        // Inicializar el ArrayList y agregar algunas sedes
        listSedes.add(new Sedes(1, "Medellín", "Cra 45",
                "https://metropolitano.gal/wp-content/uploads/2022/12/gimnasiog-4.jpg", "Centro", 32432));

        listSedes.add(new Sedes(2, "Medellín", "Carrera 45 #16 - 32",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gyY0IrVtVhEfXsx_thxvyx2wIeHrHTqDSg&usqp=CAU",
                "Belén", 3243772));

        listSedes.add(new Sedes(3, "Bogota", "Carrera 45 #16 - 32",
                "https://andro4all.com/hero/2022/03/Las-mejores-8-aplicaciones-de-rutinas-para-el-gimnasio-1.jpg?width=1200",
                "Chapiero", 324732));

        listSedes.add(new Sedes(3, "Cali", "Carrera 45 #16 - 32",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy81RnK1uszjgY3CjMP00bg5SSrJXBju2KVjJXCMrISR1_3iPvqlNZ_j-wy5Km6zW_o5A&usqp=CAU",
                "Palmaseca", 324732));
    }

    @GetMapping()
    public ArrayList<Sedes> getAllSedes() {
        return listSedes;
    }
}
