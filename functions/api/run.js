export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    });
}

export async function onRequestPost(context) {
    try {
        const reqData = await context.request.json();
        const apiResponse = await fetch("https://api.onlinecompiler.io/api/run-code-sync/", {
            method: "POST",
            headers: {
                "Authorization": "c286e40e0bcf10b830ed513645c88457",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqData)
        });
        
        const result = await apiResponse.json();
        
        return new Response(JSON.stringify(result), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
