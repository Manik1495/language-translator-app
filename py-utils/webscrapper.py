import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def get_inner_text(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        inner_text = soup.get_text(separator=' ')
        return inner_text.strip()
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_links(url, base_url, visited_urls):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract all links from the page
        links = [link.get('href') for link in soup.find_all('a', href=True)]

        # Convert relative links to absolute links
        absolute_links = [urljoin(base_url, link) for link in links]

        # Filter out links from other domains and visited links
        filtered_links = [link for link in absolute_links if urlparse(link).netloc == urlparse(base_url).netloc and link not in visited_urls]

        return filtered_links
    except requests.RequestException as e:
        print(f"Error extracting links from {url}: {e}")
        return []

def scrape_website(base_url, max_depth=3):
    visited_urls = set()

    def recursive_scrape(url, depth):
        if depth > max_depth:
            return
        inner_text = get_inner_text(url)
        if inner_text:
            print(f"Inner text of {url}:\n{inner_text}\n")
        visited_urls.add(url)

        links = extract_links(url, base_url, visited_urls)
        for link in links:
            recursive_scrape(link, depth + 1)

    recursive_scrape(base_url, depth=1)

# Example usage
website_url = 'https://parabank.parasoft.com/parabank/index.htm'
scrape_website(website_url)
