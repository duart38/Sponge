![alt text](https://github.com/duart38/Sponge/blob/master/logo.png "logo")

Quickly make api used for testing.

# How to
Just run the server and make some calls to it, Sponge will print out information about the request you just sent.

### Need some data?
No problem. Just throw some **stuff** in the models folder (use about.ts as an example) and Sponge will watch for changes and reload accordingly.


# Making plugins
Plugins are just regular methods that return a data type that can be sent by denos built in http module.
You can add your own plugins in the **plugins** folder or you can use (import) already made plugins by other users directly in your **models**
