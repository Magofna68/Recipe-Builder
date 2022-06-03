using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using reactProj.Data;
using reactProj.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDbContext<RecipeDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

// builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
//     .AddEntityFrameworkStores<ApplicationDbContext>();

// builder.Services.AddIdentityServer()
//     .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

// builder.Services.AddAuthentication()
//     .AddIdentityServerJwt();

//builder.Services.AddControllersWithViews();

builder.Services.AddControllers();


var app = builder.Build();

//if (!app.Environment.IsDevelopment())
//{
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//    app.UseHttpsRedirection();
//}
// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseMigrationsEndPoint();
//}
//else
//{
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

//app.UseAuthentication();
//app.UseIdentityServer();
app.UseAuthorization();

// app.MapControllerRoute(
//     name: "default",
//     pattern: "{controller}/{action}/{id?}");



//app.MapWhen(x => !x.Request.Path.Value.StartsWith("/api"), builder =>
//{
//    app.Run(async (context) =>
//    {
//        context.Response.ContentType = "text/html";
//        context.Response.Headers[HeaderNames.CacheControl] = "no-store, no-cache, must-revalidate";
//        await context.Response.SendFileAsync(Path.Combine(app.Environment.WebRootPath, "index.html"));
//    });
//});

app.UseEndpoints(endpoints =>
{
   endpoints.MapControllers();
    
});

//app.MapFallbackToFile("index.html");

app.Run();
