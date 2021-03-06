![alt text](https://github.com/duart38/Sponge/blob/master/logo.png "logo")

Quickly make api endpoints used for testing.

# Features
1. Sponge up all calls you make to it (prints data in console)
2. Generate dummy data based on models
3. No need to refresh when you change or add models
4. auto-generate models when a request is sent (WIP)
5. [no need to clone the project just run it via the URL](#rwc)

# How to
Just run the server and make some calls to it, Sponge will print out information about the request you just sent.
```Shell
deno run --allow-env --allow-net --allow-read --allow-write server.ts
```
> allow write is needed here if you want to generate models from unknown requests

## Custom arguments
You can also pass in custom model folders or change the print mode:
```Shell
deno run --allow-env --allow-net --allow-read --allow-write server.ts -m ./your_model_folder_path -p tree
```

## <a name="rwc"></a>Running without cloning
Don't want to clone the whole repo? **No problem** just run it from the start file URL
```Shell
deno run --allow-env --allow-net --allow-read --allow-write https://raw.githubusercontent.com/duart38/Sponge/master/server.ts
```

## Need some data?
No problem. Just throw some **stuff** in the models folder (use asyncTest.ts as an example) and Sponge will watch for changes and reload accordingly.
[Here's a nice library to get you better fake data](https://deno.land/x/deno_faker)


# Making plugins
Plugins are just regular methods that return a data type that can be sent by denos built in http module.
You can add your own plugins in the **plugins** folder or you can use (import) already made plugins by other users directly in your **models**

**Here's an example:**

```javascript
import { v4 } from "https://deno.land/std/uuid/mod.ts";
/**
 * Generates a unique ID using (https://deno.land/std/uuid/mod.ts)
 */
export function uid(){
    return v4.generate();
}
```
