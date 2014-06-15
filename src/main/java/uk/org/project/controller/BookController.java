package uk.org.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Controller
public class BookController {
    private final String INDEX = "index";
    private final String PAGE_NAME = "pageName";

//    @Autowired
//    private UserDAO userDAO;

    @RequestMapping(value = "/", method = RequestMethod.GET, produces = "text/plain")
    public String homeController(HttpServletResponse response, ModelMap mav) {
        mav.addAttribute("name", "raza");
        return INDEX;
//        map.addAttribute("user", new UserEntity());
//        map.addAttribute("userList", userDAO.getAllUsers());

    }

//    public void setUserDAO(UserDAO stockDAO) {
//        this.userDAO = stockDAO;
//    }
}
