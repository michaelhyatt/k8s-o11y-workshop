package org.springframework.samples.petclinic.system;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import co.elastic.apm.api.ElasticApm;
import co.elastic.apm.api.Transaction;
import io.micrometer.core.annotation.Timed;

@Controller
class WelcomeController {

	@Timed
    @GetMapping("/")
    public String welcome() {
        return "welcome";
    }

    @ModelAttribute("transaction")
    public Transaction transaction() {
        return ElasticApm.currentTransaction();
    }

    @ModelAttribute("apmServer")
    public String apmServer() {
        return System.getenv("ELASTIC_APM_SERVER_URLS_FOR_RUM");
    }
}
