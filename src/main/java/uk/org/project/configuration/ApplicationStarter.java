package uk.org.project.configuration;

import uk.org.project.application.ApplicationProperties;

public class ApplicationStarter {

    public static void main(String args[]) throws Exception{
        String port = ApplicationProperties.PORT.getValue();
        new JettyServer(Integer.valueOf(port), getPathToApp()).startJetty();

    }

    private static String getPathToApp(){
        return "src/main/webapp";
    }
}
