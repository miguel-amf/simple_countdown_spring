package com.quickideas.timer;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class ThymeleafController {

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }
}
