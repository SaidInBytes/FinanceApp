using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ZoyaController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public ZoyaController(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        [HttpPost("graphql")]
        public async Task<IActionResult> ProxyGraphQL([FromBody] object body)
        {
            var apiKey = _configuration["Zoya:ApiKey"];
            if (string.IsNullOrEmpty(apiKey))
                return BadRequest("API key not configured.");

            if (body == null)
                return BadRequest("Request body is required.");

            var client = _httpClientFactory.CreateClient();
            var request = new HttpRequestMessage(HttpMethod.Post, "https://sandbox-api.zoya.finance/graphql")
            {
                Content = new StringContent(body.ToString() ?? "{}", Encoding.UTF8, "application/json")
            };
            request.Headers.Add("Authorization", apiKey);

            var response = await client.SendAsync(request);
            var responseContent = await response.Content.ReadAsStringAsync();
            return Content(responseContent, "application/json");
        }
    }
}
