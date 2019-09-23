package org.springframework.samples.petclinic.system;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import co.elastic.apm.api.ElasticApm;
import co.elastic.apm.api.Transaction;

@Controller
class WelcomeController {

    @GetMapping("/")
    public String welcome() {
        return "welcome";
    }
    
    @ModelAttribute("transaction")
    public Transaction transaction() {
        return ElasticApm.currentTransaction();
    }
}
