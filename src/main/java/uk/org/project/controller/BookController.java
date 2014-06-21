package uk.org.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BookController {
    private final String MAIN = "layout/main";

//    @Autowired
//    private UserDAO userDAO;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String homeController(ModelMap map) {
        map.addAttribute("name", "raza");
        return MAIN;
//        map.addAttribute("user", new UserEntity());
//        map.addAttribute("userList", userDAO.getAllUsers());

    }

//    public void setUserDAO(UserDAO stockDAO) {
//        this.userDAO = stockDAO;
//    }
}
